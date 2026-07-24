import { LayoutGrid } from 'lucide-react'
import React, { useState } from 'react'

const ApplicationTypeOptions = () => {
     const GREEN = "#1a5c2a";
       const [appType, setAppType] = useState('probate');
  return (
    <div>
       {/* Section 1 — Application Type */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <LayoutGrid size={18} style={{ color: GREEN }} />
              <h2 className="text-lg font-bold text-gray-900">1. Select Application Type</h2>
            </div>

            <div className="space-y-3">
              {/* Option 1 */}
              <button
                // onClick={() => setAppType('probate')}
                className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-colors ${
                  appType === 'probate'
                    ? 'border-[#1a5c2a] bg-[#f0f7f2]'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    appType === 'probate' ? 'border-[#1a5c2a]' : 'border-gray-300'
                  }`}
                >
                  {appType === 'probate' && (
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: GREEN }} />
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Grant of Probate</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Applied for when the deceased left a valid and properly executed Will.
                  </div>
                </div>
              </button>

              {/* Option 2 */}
              <button
                // onClick={() => setAppType('letters')}
                className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-colors ${
                  appType === 'letters'
                    ? 'border-[#1a5c2a] bg-[#f0f7f2]'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    appType === 'letters' ? 'border-[#1a5c2a]' : 'border-gray-300'
                  }`}
                >
                  {appType === 'letters' && (
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: GREEN }} />
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Letters of Administration</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Applied for when the deceased died intestate (without a Will).
                  </div>
                </div>
              </button>
            </div>
          </div>
    </div>
  )
}

export default ApplicationTypeOptions
