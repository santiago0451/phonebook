import { useState, useEffect } from 'react'
import './app.scss'

const contactsPerPage = 5
const contacts = [
  {
    id: '1',
    name: 'Dario',
    phone: '314-715-9143',
  },
  {
    id: '2',
    name: 'Ángela',
    phone: '304-025-1291',
  },
  {
    id: '3',
    name: 'Andrés',
    phone: '317-198-7991',
  },
  {
    id: '4',
    name: 'Ilda Nora',
    phone: '320-948-1093',
  },
  {
    id: '5',
    name: 'Mariano',
    phone: '310-527-6263',
  },
  {
    id: '6',
    name: 'Santiago',
    phone: '319-146-0942',
  },
  {
    id: '7',
    name: 'Luisa',
    phone: '315-376-8045',
  },
  {
    id: '8',
    name: 'Mariana',
    phone: '317-997-1431',
  },
  {
    id: '9',
    name: 'Manuela',
    phone: '318-502-2612',
  },
  {
    id: '10',
    name: 'Laura',
    phone: '319-059-0214',
  },
  {
    id: '11',
    name: 'Luis',
    phone: '321-666-1044',
  },
  {
    id: '12',
    name: 'Pepe',
    phone: '306-793-4060',
  },
  {
    id: '13',
    name: 'Alberto',
    phone: '319-106-2017',
  },
  {
    id: '14',
    name: 'Juan',
    phone: '323-781-7416',
  },
  {
    id: '15',
    name: 'Manuel',
    phone: '323-026-0338',
  },
  {
    id: '16',
    name: 'Pedro',
    phone: '315-593-6788',
  },
  {
    id: '17',
    name: 'Esteban',
    phone: '311-275-2912',
  },
  {
    id: '18',
    name: 'Viviana',
    phone: '318-452-0467',
  },
  {
    id: '19',
    name: 'Martín',
    phone: '314-526-7919',
  },
  {
    id: '20',
    name: 'Nia',
    phone: '307-483-7883',
  },
]

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(() => {
    setFilteredResults(contacts)
  }, [])

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchValue(value)
    handleSearch(value)
  }

  const handleSearch = (searchValue) => {
    const updatedResults = contacts.filter((contact) => {
      const nameMatch = contact.name.toLowerCase().startsWith(searchValue.toLowerCase())
      const phoneMatch = contact.phone.startsWith(searchValue)

      return nameMatch || phoneMatch
    })
    setFilteredResults(updatedResults)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(filteredResults.length / contactsPerPage)
  const startIndex = (currentPage - 1) * contactsPerPage
  const endIndex = startIndex + contactsPerPage
  const pageContacts = filteredResults.slice(startIndex, endIndex)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <div className='main-container'>
      <div className='phonebook-card'>
        <main className='phonebook-container'>
          <input
            placeholder='Santiago, Mariano...'
            onChange={handleInputChange}
            value={searchValue}
          />
          <ul>
            {searchValue && pageContacts.length === 0 ? (
              <li className='not-found'>Contacto no encontrado</li>
            ) : (
              pageContacts.map((contact) => (
                <li key={contact.id}>
                  <div className='contact-card'>
                    <span className="name">{contact.name}</span>
                    <span className="phone">{contact.phone}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                Page {index + 1}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export { App }
