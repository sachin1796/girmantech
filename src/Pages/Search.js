import React, { useState } from 'react';
import bg from "../Assets/bg.png"; 
import girman from "../Assets/girman.png";
import data from "../data/data.json"; 
import { FaPhoneAlt, FaMapMarkerAlt, FaSearch } from 'react-icons/fa'; 
import error from '../Assets/error.png'

const Search = () => {
  const [query, setQuery] = useState(''); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null);
   


  const filteredData = data.filter(item => {
    
    const trimmedQuery = query.trim().toLowerCase();

    if (!trimmedQuery) return true;

    const queryParts = trimmedQuery.split(' ');

    return queryParts.every(part => 
      item.first_name?.toLowerCase().includes(part) ||
      item.last_name?.toLowerCase().includes(part) ||
      item.city?.toLowerCase().includes(part)
    );
  });

  const handleFetchDetails = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

 
 

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex flex-col justify-center items-center h-full py-20">
        
        <img
          src={girman}
          alt="girmanTech"
          className="md:w-[798px] md:h-[120.67px] px-2 md:px-0 object-contain"
        />
        
        
        <div className="relative md:w-[798px] w-full h-[51px] border-[1px] rounded-[12px]">
          <input
            type="text"
            placeholder="Search by name or city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 text-lg rounded-[12px] pl-10"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-4 w-full">
          {filteredData.length === 0 ? (
            <div className='flex justify-center items-center w-full h-full'>
            <img className='w-[472.42px] h-[402.39px] md:ml-[930px]' src={error} alt='errorImage'/>
            </div>
          ) : (
            filteredData.map(item => (
              <div key={item.contact_number} className="bg-white p-4 rounded-lg shadow-md">
               
                <div className="flex justify-center mb-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${item.contact_number.slice(-1)}`} 
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                
               
                <h3 className="font-bold text-xl text-center">{item.first_name} {item.last_name}</h3>
                
                
                <div className="flex justify-center items-center mt-2">
                  <FaMapMarkerAlt className="mr-2 text-gray-600" />
                  <p className="text-gray-600">{item.city}</p>
                </div>
                
              
                <hr className="my-4 border-gray-300" />

                
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <FaPhoneAlt className="mr-2 text-gray-600" />
                    <p className="text-gray-600">{item.contact_number}</p>
                  </div>

                  <p className="text-sm text-gray-600 mt-2">Available on phone</p>
                </div>

               
                <div className="mt-4">
                  <button
                    onClick={() => handleFetchDetails(item)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full"
                  >
                    Fetch Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Fetch Details</h2>
            <p className="mb-4">Here are the details of the following employee:</p>

            
            <div className="flex flex-col items-center mb-4">
             
              <img
                src={`https://i.pravatar.cc/150?img=${selectedItem.contact_number.slice(-1)}`}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <p className="font-bold text-lg">{selectedItem.first_name} {selectedItem.last_name}</p>
              <p className="text-gray-600">{selectedItem.city}</p>
              <p className="text-gray-600">{selectedItem.contact_number}</p>
            </div>

            
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
