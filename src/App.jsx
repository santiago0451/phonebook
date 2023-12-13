import { useState } from 'react'
import './app.scss'

const contacts = [
  {
    id: '1',
    name: 'Santiago',
    phone: '314-715-9143',
  },
  {
    id: '2',
    name: 'Mariano',
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
    name: 'Dario',
    phone: '310-527-6263',
  },
  {
    id: '6',
    name: 'Ángela',
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
  const [searchResults, setSearchResults] = useState([])

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchValue(value)
    handleSearch(value)
  }

  const handleSearch = (searchValue) => {
    const filteredResults = contacts.filter((contact) => {
      const nameMatch = contact.name.toLowerCase().startsWith(searchValue.toLowerCase())
      const phoneMatch = contact.phone.startsWith(searchValue)

      return nameMatch || phoneMatch
    })
    setSearchResults(filteredResults)
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
            {searchValue === '' ? (
              contacts.map((contact) => (
                <li key={contact.id}>
                  <span className="name">{contact.name}</span>
                  <span className="phone">{contact.phone}</span>
                </li>
              ))
            ) : searchResults.length > 0 ? (
              searchResults.map((contact) => (
                <li key={contact.id}>
                  <span className="name">{contact.name}</span>
                  <span className="phone">{contact.phone}</span>
                </li>
              ))
            ) : (
              <li>Contacto no encontrado</li>
            )}
          </ul>
        </main>
      </div>
    </div>
  )
}

export { App }
