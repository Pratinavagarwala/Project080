import * as  React from "react" ;
import{Header} from "react-native-elements";

const MyHeader=(props)=>{
    return(
        <Header 
            backgroundColor="grey"
            centerComponent={{text:"Barter System", style:{color:"white",fontSize:10,fontWeight:"bold"}}}
        />
    )
} 
 export default MyHeader;