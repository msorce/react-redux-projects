import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID PUf5sQXv9LB6_T_pagvyGQVmsMxk-IIU4DXSKp032FM"
    }
});
