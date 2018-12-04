
export default {
    "foods": {
        "Chicken Tenders": {
            image: "http://res.cloudinary.com/culturemap-com/image/upload/q_auto/c_limit,w_1200/v1506520546/photos/261065_original_portrait.png",
            name: "Chicken Tenders",
            restaurant: "McDonald's",
            ingredients: ["chicken", 'bread', 'french fries', 'soda', 'bbq sauce'],
        },
        "Ramen": {
            image: "http://seonkyounglongest.com/wp-content/uploads/2018/04/shoyu-ramen-1.jpg",
            name: "Ramen",
            restaurant: "",
            ingredients: ['noodles', 'pork', 'eggs', 'onions', 'soup'],
        },
        "Friend Rice with Chow Mein": {
            image: "https://s3-media4.fl.yelpcdn.com/bphoto/S8UVZoP9cyzLqRNBUrovOQ/348s.jpg",
            name: "Friend Rice with Chow Mein",
            restaurant: "Panda Expresss",
            ingredients: ['rice', 'chow mein', 'orange chicken'],
        },
        "Meatball and Spaghetti": {
            image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/12/0/FN_Ina-Garten-Real-Meatballs-and-Spaghetti_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384540886901.jpeg",
            name: "Meatball and Spaghetti",
            restaurant: "Il Forno",
            ingredients: ['spaghetti', 'tomato sauce', 'meatballs', 'parmesan cheese'],
        },
        "Banana Pancakes": {
            image: "https://images.huffingtonpost.com/2016-04-07-1460049841-1325332-BananaPancakes-thumb.jpg",
            name: "Banana Pancakes",
            restaurant: "Pitch",
            ingredients: ['pancakes', 'syrup', 'butter', 'bananas'],
        },
        "Grilled Peanut Butter Jelly with Banana": {
            image: "https://neighborfoodblog.com/wp-content/uploads/2013/01/grilled-pb-and-j.jpg",
            name: "Grilled Peanut Butter Jelly with Banana",
            restaurant: "Red Mango",
            ingredients: ['bananas', 'berries', 'whole wheat bread', 'peanut butter'],
        },
        "Turkey Avocado Sandwich": {
            image: "https://i1.wp.com/www.yourchoicenutrition.com/wp-content/uploads/2016/10/Hot-Turkey-and-Avocado-Sandwiches-3-1024x685.jpg?resize=650%2C435",
            name: "Turkey Avocado Sandwich",
            restaurant: "Red Mango",
            ingredients: ['whole wheat bread', 'avocado', 'turkey', 'tomato'],
        },
        "Fried Chicken": {
            image: "https://i.imgur.com/xEhUV6u.jpg",
            name: "Fried Chicken",
            restaurant: "Skillet",
            ingredients: ['fried chicken', 'collard greed', 'mac and cheese', 'biscuit'],
        },
        "Blue Plate": {
            image: "https://previews.123rf.com/images/scukrov/scukrov1404/scukrov140400071/27911616-a-country-style-scrambled-egg-breakfast-on-a-rustic-wooden-restaurant-table-eggs-sausage-links-toast.jpg",
            name: "Blue Plate",
            restaurant: "Skillet",
            ingredients: ['sausage', 'eggs', 'whole grain toast', 'oatmeal'],
        },
    },
    "questions": {
        balance: {
            title: "Which meal is more balanced?",
            rank: ["Turkey Avocado Sandwich", "Grilled Peanut Butter Jelly with Banana", "Fried Chicken", "Ramen", "Blue Plate", "Meatball and Spaghetti", "Friend Rice with Chow Mein", "Chicken Tenders", "Banana Pancakes", ],
            versus: [["Turkey Avocado Sandwich", "Blue Plate"], ["Grilled Peanut Butter Jelly with Banana", "Friend Rice with Chow Mein"], ["Fried Chicken", "Friend Rice with Chow Mein"], ["Chicken Tenders", "Turkey Avocado Sandwich"], ["Fried Chicken", "Banana Pancakes"]]
        },
        variety: {
            title: "Which meal is more varied?",
            rank: ["Turkey Avocado Sandwich", "Fried Chicken", "Grilled Peanut Butter Jelly with Banana", "Blue Plate", "Ramen", "Friend Rice with Chow Mein", "Meatball and Spaghetti", "Chicken Tenders", "Banana Pancakes"],
            versus: [["Turkey Avocado Sandwich", "Friend Rice with Chow Mein"], ["Fried Chicken", "Banana Pancakes"], ["Grilled Peanut Butter Jelly with Banana", "Chicken Tenders"], ["Ramen", "Meatball and Spaghetti"], ["Friend Rice with Chow Mein", "Banana Pancakes"]]
        },
        adequate: {
            title: "Which meal is more adequate?",
            rank: ["Fried Chicken", "Blue Plate", "Turkey Avocado Sandwich", "Grilled Peanut Butter Jelly with Banana", "Blue Plate", "Meatball and Spaghetti", "Friend Rice with Chow Mein", "Ramen", "Banana Pancakes", "Chicken Tenders"],
            versus: [["Fried Chicken", "Banana Pancakes"], ["Blue Plate", "Ramen"], ["Turkey Avocado Sandwich", "Chicken Tenders"], ["Grilled Peanut Butter Jelly with Banana", "Friend Rice with Chow Mein"], ["Chicken Tenders", "Meatball and Spaghetti"]]
        },
        moderate: {
            title: "Which meal is more moderate?",
            rank: ["Blue Plate", "Turkey Avocado Sandwich", "Meatball and Spaghetti", "Banana Pancakes", "Grilled Peanut Butter Jelly with Banana", "Friend Rice with Chow Mein", "Chicken Tenders", "Fried Chicken", "Ramen"],
            versus: [["Blue Plate", "Chicken Tenders"], ["Fried Chicken", "Turkey Avocado Sandwich"], ["Ramen", "Meatball and Spaghetti"], ["Grilled Peanut Butter Jelly with Banana", "Fried Chicken"], ["Banana Pancakes", "Friend Rice with Chow Mein"]]
        }
    }
}
