import React, { useState, useEffect } from "react";
import {addDoc, collection} from 'firebase/firestore';
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [address, setPostAdress] = useState("");
    const [value, setValue] = useState('');

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();
    
    
    const createPost = async () => { 
        await addDoc(postsCollectionRef, 
            {title, 
            postText, 
            address,
            value, 
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
        });
        navigate("/locationsvisited");
    };

    useEffect(() => {
        if (!isAuth) {
          navigate("/login");
        }
      }, []);
    
    return (
        <div className="createPostPage">
          <div className="cpContainer">
            <h1>Add Location Visited</h1>
            <div className="inputGp">
              <label> Title:</label>
              <input
                placeholder="Title..." 
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
              />
            </div>
            <div className="inputGp">
              <label> Description:</label>
              <textarea
                placeholder="Post..."
                onChange={(event) => {
                    setPostText(event.target.value);
                }}
            
              />
            </div>
            <div className="inputGp">
              <label> Address:</label>
              <textarea
                placeholder="Address..."
                onChange={(event) => {
                    setPostAdress(event.target.value);
                }}
              />
            </div>
            <div className="inputGp">
              <label> Rating:</label>
              <input
                type="text"
                placeholder="Rating..."
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
              />
            </div>
            <button onClick={createPost}> Add Location</button>
          </div>
        </div>
      );
    
}

export default CreatePost;