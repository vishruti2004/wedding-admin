import React, { useEffect, useState } from 'react'
import { BaggageClaim, ClipboardPenLine, UserPlus, Users } from 'lucide-react'
import axios from 'axios'
import Sidebar from './Sidebar';

const Home = () => {

  const [allbridewear , setbridewear] = useState()
  const [allOrder , setorder] = useState()
  const [allgroomwere,setgroomwere]=useState()
  const [alldecorate,setdecorate]=useState()
  const [allPhotography,setPhotography] =useState()

  useEffect(() => {

axios.get('http://localhost:3000//admin/allbridewear')
      .then((response) => {
        setbridewear(response.data.data.length);
      })
      .catch((err) => {
        console.log(err);
      })

      axios.get('http://localhost:3000//admin//allorder')

      .then((response) => {
        setorder(response.data.data.length);

      })
      .catch((err) => {
        console.log(err);
      }) 

      axios.get('http://localhost:3000//admin//allgroomwear')
      .then((response) => {
        setgroomwere(response.data.data.length);
      })
      .catch((err) => {
        console.log(err);
      })

      axios.get('http://localhost:3000//admin//alldecorate')

      .then((response) => {
        setdecorate(response.data.data.length);

      })
      .catch((err) => {
        console.log(err);
      })

    axios.get('http://localhost:3000//admin//allPhotography')

      .then((response) => {
        setPhotography(response.data.data.length);

      })
      .catch((err) => {
        console.log(err);
      })
      
  },
  [])


  const count_data = [
    {
      name: "Total Bridewere",
      count: allbridewear,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
        <svg
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

      </div>
    },
    {
      name: "Total Groomwere",
      count: allgroomwere,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
        <UserPlus />
      </div>
    },
    {
      name: "Total Decorate",
      count: alldecorate,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
        <Users />
      </div>
    },
    {
      name: "Total Photography",
      count: allPhotography,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
        <ClipboardPenLine />
      </div>
    },
    {
      name: "Total Order",
      count: allOrder,
      icon: <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray-600 bg-gray-100 rounded-full mr-6">
        <BaggageClaim />
      </div>
    },
  ]

  return (
   

    <>

      
      <div className="d-flex">
                <Sidebar className="col-2" />
                <div className="col-10">
                <div className="form-outline mb-4 mt-2">
                    </div> 
                  <div className='my-4 text-center overflow-y-auto'>

         <section className="relative w-full overflow-hidden ">
          <div className="relative mx-auto px-4">
            <div className="mx-auto ">
              <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {count_data?.map((item, idx) => {
                  return <div key={idx} className="flex items-center justify-start p-5 bg-white shadow rounded-lg">
                    {item?.icon}
                    <div>
                      <span className="block text-2xl text-start font-bold">{item?.count}</span>
                      <span className="block text-gray-500">{item?.name}</span>
                    </div>
                  </div>
                })}

              </section>

            </div>
          </div>
        </section>
      </div>
                </div>
            </div>


    </>
  )
}

export default Home

