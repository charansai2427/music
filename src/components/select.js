import React, { useState } from "react";
import{AiFillHome} from "react-icons/ai";
import{BsFileMusicFill} from "react-icons/bs";
import{MdAlbum} from "react-icons/md";
import{BsPersonBadgeFill} from "react-icons/bs";
import {BiSearchAlt2} from "react-icons/bi"
import{BiSolidPlaylist} from "react-icons/bi";
import { useRef } from "react";

const Select = ({setState}) => {
    const searchRef = useRef(null);
    return (

        <div className='select-api'>

            <div className='s-icon'>
                <img className='m-icon' src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/03/11167spotify-logo-1920x1080-2_8MlUCWA.jpg" />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><b style={{ color: "red" }}>Spotify</b></div>
            </div>
            <div>
                <input type='text' ref={searchRef}/>
             <BiSearchAlt2 className="icon" onClick={() => setState(searchRef.current.value)}/>
            </div>

            <div>
                <div style={{ color: "red", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.3rem" }}><AiFillHome /> <p style={{ color: "black" }}>ALL</p></div>
            </div>

            <div className='search-content'>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                   <div><b>Search content</b></div>
                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BsFileMusicFill /> <button style={{ color: "black" }}>New Songs</button></div>
                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><MdAlbum /> <button style={{ color: "black" }}> Search Albums</button></div>
                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BsPersonBadgeFill /> <button style={{ color: "black" }}>Search Artist</button></div>
                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BiSolidPlaylist /> <button style={{ color: "black" }}>Search Playlist</button></div>
                </div>
                <br />
                <br />

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                    <div><b>Details</b></div>
                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BsFileMusicFill /> <button style={{ color: "black" }}>Song Details</button></div>
                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><MdAlbum /> <button style={{ color: "black" }}>Album Details</button></div>
                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BsPersonBadgeFill /> <button style={{ color: "black" }}>Artist Details</button></div>
                    <div style={{ color: "black", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}><BiSolidPlaylist /> <button style={{ color: "black" }}>Playlist Details</button></div>
                </div>

            </div>
        </div>
    )
}
export default Select
