// export default async function Search({q}){
//     const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${q} &language=en-US&page=1&include_adult=false`)
//     const res=  await data.json()
//     console.log(res)
//     let inputHandler = (e) => {
        
//         var lowerCase = e.res.toLowerCase();
//         setInputText(lowerCase);
//       };
//     const BarStyle = {width:"20rem", border:"none", padding:"0.5rem"};
//   return (
//     <input className="Search "
//      style={BarStyle}
//      key="search-bar"
//      onChange={inputHandler}
//     value=
//      placeholder={"Search Movie"}
     
//     />
//   );
// }

