import PortfolioList from "./PortfolioList";
import PortfolioMenu from "./PortfolioMenu";



const Portfolio = ({categories,filterItems,portfolioData}) => {
  return (
    <div className="max-w-4xl  flex flex-col  p-5 pt-10 mx-auto justify-center items-center  text-gray-300">
        <h1 className='text-2xl font-bold pt-0 pb-8'>My Projects</h1>
      <PortfolioList 
          categories={categories} 
          filterItems={filterItems}/>
       <PortfolioMenu portfolioData={portfolioData}/>
    </div>
  )
}

export default Portfolio