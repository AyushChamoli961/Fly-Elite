import {InitialProfile} from "@/lib/initial-profile";


const Page = async() => {

  const profile = await InitialProfile();

  if(!profile){
    return <div>Please Sign.</div>
  }
  return ( <div>
    hello
  </div> );
}
 
export default Page;