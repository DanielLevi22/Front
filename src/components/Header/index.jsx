import { RiShutDownLine } from 'react-icons/ri'
import { Container ,Profile, Logout} from "./styles";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar.png'

export function Header(){
    const { singOut , user } = useAuth();

    const avatarUrl = user.avatar?`${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt="Foto do Usuario" />
                <div>
                    <span className='bemvindo'>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={singOut}>
                 <RiShutDownLine/>
            </Logout>

        </Container>
    );
}