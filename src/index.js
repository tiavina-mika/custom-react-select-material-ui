import React from "react";
import ReactDOM from "react-dom";
import { SingleSelect } from "react-select-material-ui";

const style = { 
  width: 100, 
  backgroundColor: '#19314a' ,
  borderRadius: 5,
}

const stylesFn = {
  clearIndicator: (base) => ({
    ...base,
    color: '#ffff80',
    '&:hover': { color: '#ff0000' }
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#6f809b',
    '&:hover': { color: '#2592EA' }
  }),
  menuList: (base) => ({
    ...base,
    backgroundColor: '#123456',
    color: '#ffffff',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: -7,
  }),
  option: (base, { isSelected }) => ({
    ...base,
    backgroundColor: '#19314a',
    color: isSelected ? '#2592EA' : '#ffffff',
    '&:hover': { backgroundColor: '#234567', color: '#fff' }
  }),
  singleValue: (base) => ({
    ...base,
    color: '#6f809b', 
    paddingLeft: 5,
    paddingRight: 5,
  })
};

const App = () => {
    const options = ["Africa", "America", "Asia", "Europe"];
    const handleChange = value => {
      console.log(value);
    }; 
    return (
      <div className="App">
        <SingleSelect 
          style={style} 
          value="Europe" 
          options={options} 
          onChange={handleChange}
          SelectProps={{
              styles: stylesFn
          }} 
        />
      </div>
    );
 }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
