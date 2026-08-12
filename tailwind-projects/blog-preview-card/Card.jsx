const Card  = () => {
    return (
        <div className="bg-white font-italic w-80 p-4 rounded-xl border-1 border-black shadow-xl" > 
            <img src="./src/assets/images/illustration-article.svg" className="rounded-xl"></img>   
            <h5 className=" bg-[hsl(47,88%,63%)] font-semibold p-1 text-sm w-19 rounded-sm mt-2">Learning</h5>
            <p className="font-semibold  mt-3 text-sm">Published 21 Dec 2023</p>
            <h2 className="font-bold text-xl mt-2">HTML & CSS foundations</h2>
            <p className="mt-3 text-gray-500 text-sm">These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div className="flex mt-3">
                <img src="./src/assets/images/image-avatar.webp" alt=""  className="w-8 h-8"/>
                <h4 className="font-bold text-sm mt-1 ml-4 ">Greg Hooper</h4>
            </div>
        </div>
    )
}
export default Card;