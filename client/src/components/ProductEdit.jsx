import React, { useContext, useState,useEffect } from "react";
import { dataContext } from "../contextProvider/DataContextProvider";
import { useParams } from "react-router-dom";
import backgroundImage from "../images/image3.jpg";
import axios from "axios";

const EditProduct =()=>{
    const{originalProductList,categories,hostedRoutePrefix}=useContext(dataContext)
    const { id } = useParams();
const product = originalProductList.find((product) => product.id === Number(id));

    
    console.log(product);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
  
    useEffect(() => {
      if (product) {
        setName(product.name);
        setDescription(product.description);
        setCategory_id(product.category_id);
        setImage(product.image);
        setPrice(product.price);
      }
    }, [product]);
    const backgroundStyles = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    categories.map((category)=>{
        if(category.name===category){
            setCategory_id(category.id)
        }
    })
  
    const handleImageChnge = (e)=>{
        const file = e.target.files[0];
        console.log(file);
        if (file) {
            // Define the allowed image MIME types
            const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
            
            // Check if the uploaded file's MIME type is allowed
            if (allowedImageTypes.includes(file.type)) {
              const imageFile = URL.createObjectURL(file);
              setImage(imageFile);
            } else {
              // Display an error message or prevent the upload
              alert('Please upload a valid image file (JPEG, PNG, or GIF).');
              // Optionally, clear the input field
              e.target.value = null;
            }
          }
        
      }
    const handlePatchRequest = () => {
        const url = `${hostedRoutePrefix}/products/products/${id}`;
       
        
        const data = {  
            name : name,
            description : description,
            vendor_id : 1,
            category_id :category_id,
            image : image,
            price : price
        };
    
        axios
          .patch(url, data, {
            headers: {
              'Content-Type': 'application/json',
              
            },
          })
          .then((response) => {
            console.log('User profile updated successfully');
          })
          .catch((error) => {
            console.error('Error updating user profile:', error);
          });
      };
      const categoriesList = categories.map((item) => (
        <option className="hover:bg-white hover:text-green-600 bg-white" key={item.id} value={item.name}>
        {item.name}
      </option>))

    return(
        <div
        style={{
          ...backgroundStyles,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${backgroundImage})`,
        }}
        class=" min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
          <form
           style={{
            ...backgroundStyles,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
            width: "70%",
            padding: "3rem",
            borderRadius: "25px",
            opacity: 1,
          }}
           className="outline outline-gray-100 m-14 ml-48 p-4 rounded-xl w-2/3 text-white" onSubmit={handlePatchRequest}>
            <label htmlFor="name">Name</label>
            <input
            className="outline outline-green-200 rounded-lg text-green-600"
              type="text"
              id="name"
              name="name"
              placeholder={name}
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
            <label htmlFor="description">Description</label>
            <input
            className="outline outline-green-200 rounded-lg text-green-600"
              type="text"
              id="description"
              name="description"
              placeholder={description}
              onChange={(e)=>setDescription(e.target.value)}
              value={description}
            />
            <label htmlFor="price">Price</label>
            <input
            className="outline outline-green-200 rounded-lg text-green-600"
              type="number"
              id="price"
              name="price"
              placeholder={price}
              onChange={(e)=>setPrice(e.target.value)}
              value={price}
            />
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="w-full p-2 border rounded bg-white text-green-600 rounded-lg outline outline-green-200"
            >
              <option className="hover:bg-white hover:text-green-600 bg-white" >Select category</option>
                {categoriesList}
            </select>
            <label htmlFor="image">Upload Image</label>
            <input type="file" name="image"id="name" onChange={handleImageChnge} className=""/>
            <p className="font-bold">Image Preview</p>
            <img src={image} alt="image" className=" w-28 h-24 rounded-lg"/>
            <button className="bg-green-600 justify-self-center hover:bg-green-700" type="submit">CHANGE</button>
            
          </form>
          
        </div>
    )
}

export default EditProduct