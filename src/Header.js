import Card from "./Card";
function Header(){
    const cardData=[
        {
            title:"Youtube",
            description:"YouTube is a popular video sharing website where registered users can upload and share videos with anyone able to access the site. These videos can also be embedded and shared on other sites.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUSSFQlXrPzgKHnYaQBsoCNBM-LFmvRr9FlI8ju_qxmbOrBZ0zq8zUvf6JyFpprQvC44&usqp=CAU"
        },
        {
            title:"Google",
            description:"Google is an internet search engine. It uses a proprietary algorithm that's designed to retrieve and order search results to provide the most relevant and dependable sources of data possible.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLqYJuyRhLZB_Ldrs6HZEbTpM-J709yjJ2NcDHQOpHfLjWIliGROL0jdO2ffH_E4DdTs&usqp=CAU"
        },
        {
            title:"Facebook",
            description:"Facebook is a popular free social networking website that allows registered users to create profiles, upload photos and video, send messages and keep in touch with friends, family and colleagues.",
            image:"https://cdn4.vectorstock.com/i/1000x1000/79/78/facebook-logo-icon-vector-29227978.jpg"
        },
        {
            title:"Twitter",
            description:"Twitter is an American microblogging and social networking service on which users post and interact with messages known as 'tweets'",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHOptMr-a2P4WCDWMhgjzIA-VGkdM10JEITXwyFE_NBDbpVm0kOIQATOPmiFQ54vKrH0&usqp=CAU"
        },
        {
            title:"Instagram",
            description:"Instagram is an online photo sharing service. It allows you to apply different types of photo filters to your pictures with a single click, then share them with others.",
            image:"https://www.konstantinfo.com/blog/wp-content/uploads/2017/04/Instagram1.jpg"
        },
        {
            title:"Netflix",
            description:"Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device.",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvr8-w9DVNuGFjRwAUsLl6TUZV4iJwJ8qgeQjQ8Fe_O0EmsNIkHvEFOdV0xCPtCcnQZY&usqp=CAU"
        },
    ];

    return(
        <div className="container">
            {
                cardData.map((content,index)=>(
                <Card key={index} title={content.title} desc={content.description} image={content.image}/>
                ))
            }
        </div>
    )
}

export default Header;