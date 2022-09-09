import ArticleIcon from '@mui/icons-material/Article';
import CreateIcon from '@mui/icons-material/Create';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { collection, onSnapshot, addDoc, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import "./Feed.css";
import { db } from './firebase.js';
import InputOptions from './InputOptions';
import Post from './Post';
import { serverTimestamp } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';



function Feed() {

    const user = useSelector(selectUser)



    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])



    useEffect(() => {

        const postsRef = collection(db, "posts")
        const q = query(postsRef, orderBy("timestamp", "desc"))

        onSnapshot(q, (snapshot) => (
            setPosts(
                snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }
                )))
        )
        )
    }, [])






    const sendPost = e => {
        e.preventDefault();
        addDoc(collection(db, 'posts'), {
            name: user.email,
            description: "pas de description",
            message: input,
            photoUrl: "",
            timestamp: serverTimestamp(),

        });

    }


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                        />

                        <button onClick={sendPost} type='submit'>envoyer</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Vidéo" color="#4E9731" />
                    <InputOptions Icon={EventNoteIcon} title="Évenement" color="#AA7C24" />
                    <InputOptions Icon={ArticleIcon} title="Rédiger un article" color="#FD5115" />

                </div>
            </div>

            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}


                    />
                ))}
            </FlipMove>



        </div>
    )
}

export default Feed