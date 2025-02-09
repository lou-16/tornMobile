import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface responseType  {
    body : string
}

const FetchText = () => {
    const [text, setText] = useState<String | null>(null); 
 
 useEffect(()=>{   
    const fetchData = async ()=> {
        try{
            const response:Response = await fetch("http://ipv4.192.168.1.241:1601");
            if(!response.ok) {
                setText("the shit failed bro T_T, response was not ok. error code: " + response.status);
            }
                const textDataJson : responseType = await response.json()
                const textData = textDataJson.body;
                setText(textData);
            }
            catch (error : any) {
                console.error("fetch error", error);
                setText("the response never worked lil bro, the try part got fucked up");
            }
            finally{
                setText("idk bro this one's on u");
            }
            
        }
    fetchData();
    }, []);    
    

    return (<View>
        <Text style={{color: "#f0f0f0", fontSize : 30}}>{text}</Text>
    </View>)
}

export default FetchText;