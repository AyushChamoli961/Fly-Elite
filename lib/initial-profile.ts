import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./db";
import { redirect } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
export const InitialProfile = async () => {
    
     const user = await currentUser();

     if(!user){
        return null;
     }

     const profile = await prisma.profile.findUnique({
        where: {
            userId: user.id,
        }
     })

     if(profile){
        return profile;
     }

     const newProfile = await prisma.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.emailAddresses[0].emailAddress
        }
     }
     )
     return newProfile;
}