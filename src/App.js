import React, {useState} from 'react';
import Recipe from "./Recipe"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './App.css';

const App = () =>{

  const APP_ID = "bc228d11";
  const APP_KEY = "a075102368d456d3153e5d4603cf86aa";

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  

  const handleChange = (e) => {

    setSearch(e.target.value);
    
  }


  const getData = async (e) =>{
    
    e.preventDefault();

    const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }
  
  
  return(

    <div className="rootdiv">
    <Header />
    <div className="App">
      <form>
        <input className="input" type="text" placeholder="I currently have..." value={search} onChange={handleChange}/>
        <button className="button" type="submit" onClick={(e)=>{getData(e)}}>Search</button>
      </form>
      
      {recipes.map(recipe=>(
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingrdnts={recipe.recipe.ingredients} />
      ))}
    </div>
    <Footer />
    </div>
  );

}

export default App;
