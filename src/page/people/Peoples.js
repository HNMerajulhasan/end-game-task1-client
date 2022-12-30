import React from 'react'
import FriendReqCard from '../../component/card/FriendReqCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// best tab
// import Tabs, { Tab } from 'react-best-tabs'
// import 'react-best-tabs/dist/index.css'
function Peoples() {
  return (
    <div className="">
      <Tabs>
        <TabList className="grid grid-cols-3 gap-1 mb-5">
          <Tab
            className={`cursor-pointer text-white rounded flex-grow flex items-center justify-center py-2 ${
              'react-tabs__tab--selected' ? 'bg-blue-400' : 'bg-blue-800'
            }  `}
          >
            <button>
              <h4 className="text-xl">Friends</h4>
            </button>
          </Tab>
          <Tab
            className={`cursor-pointer text-white rounded flex-grow flex items-center justify-center py-2 ${
              'react-tabs__tab--selected' ? 'bg-blue-400' : 'bg-blue-800'
            }  `}
          >
            <button>
              <h4 className="text-xl">Requested</h4>
            </button>
          </Tab>
          <Tab
            className={`cursor-pointer text-white rounded flex-grow flex items-center justify-center py-2 ${
              'react-tabs__tab--selected' ? 'bg-blue-400' : 'bg-blue-800'
            }  `}
          >
            <button>
              <h4 className="text-xl">Suggestions</h4>
            </button>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FriendReqCard />
            <FriendReqCard />
            <FriendReqCard />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FriendReqCard />
            <FriendReqCard />
            <FriendReqCard />
            <FriendReqCard />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FriendReqCard />
            <FriendReqCard />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Peoples
