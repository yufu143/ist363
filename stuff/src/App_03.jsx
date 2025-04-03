const students = [
    {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'}
    {}
    {}
]

function App() {
    let filteredStudents = students;

    const handleChange = (event) => {
        filteredStudents = students.filter(student => student.name === event.target.value);
        console.log(filteredStudents);
    }
    return (
      <div>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" onChange={handleChange} />
      </div>
      <ul>
        filteredStudents.map(function(item) {
        return
        <li key={item.suid}>
            Name: {item.name}<br />
            Year: {item.year}<br />
            Major: {item.major}<br />
        </li>;
        })}
      </ul>
    );
  }
  
  export default App;