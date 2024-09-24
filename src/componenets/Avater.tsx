import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import { getUserProfilePicture } from "../utils/getUserProfilePicture";

const Avater = ({ handle }: { handle: string }) => {
    
    const users = useSelector((state: RootState) => state.season.participants);
    const [ dp, setDp ] = useState("");
    
    const getDp = async() => {
        const index = users.findIndex( user => user.handle === handle);
        if(index === -1){
            return null;
        }
        const user = users[index];
        if(user.dp !== ""){
            return user.dp;
        }
        try {
            var dp = await getUserProfilePicture(handle);
        } catch (error) {
            return null;
        }
        return dp;
    }

    useEffect(() => {
        (async() => {
            setDp(await getDp() ?? "/avater.png");
        })();
    }, [])
    return (
        <div className="avatar">
            <div className="mask mask-squircle h-8 w-8">
                <img src={dp} alt="dp" />
            </div>
        </div>
    )
};
export default Avater;