import {getServerSession} from 'next-auth/next' ;
import { authConfig } from '../../configs/auth.ts';

export default async function Profile() {

  //работает только на сервере
  const session=await getServerSession(authConfig);
  console.log(session);
  return (
    <div>
      <h1>Profile of {session?.user.name?session?.user.name:session?.user.first_name}</h1>
      {session?.user?.image&&<img src={session.user.image} alt="Oops"/>}
    </div>
  );
}
