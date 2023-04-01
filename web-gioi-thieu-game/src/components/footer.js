// import Footer_Style from './css/footer.module.css';
import Logo from '../../public/logonew.png';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYouTube } from '@fortawesome/free-solid-svg-icons';

export default function navBarComponent() {
    return (
        <>
            <div className='col-12 col-sm-4'>
                <Image
                    src={Logo}
                    alt="Logo"
                    style={{ width: 95 + '%' }}
                />

                <p>
                    Daominhha.com là website giới thiệu Game Miễn Phí Tốc độ cao mới nhất ,
                     Full Kích Hoạt , Full DLC , Full Mods … 
                     chia sẻ những thủ thuật về game và công nghệ . 
                     Ngoài ra daominhha.com còn cung cấp cho anh em một nơi 
                     tải Phần Mềm Miễn Phí Chất Lượng Cao . Với Phương Châm  
                     ” Chia sẻ miễn phí tất cả “
                </p>


            </div>

            <div className='col-12 col-sm-4'>
                <ul>CHÍNH SÁCH & ĐIỀU KHOẢN
                    <li>
                        <Link href="#">Giới thiệu về Daominhha.com</Link>
                    </li>
                    <li>
                        <Link href="#">Chính sách bảo mật</Link>
                    </li>

                    <li>
                        <Link href="#">Câu hỏi thường gặp</Link>
                    </li>

                    <li>
                        <Link href="#">Liên hệ</Link>
                    </li>

                    <li>
                        <Link href="#">Điều khoản sử dụng</Link>
                    </li>

                </ul>
            </div>

            <div className='col-12  col-sm-4'>
                <ul className='follow-social'>Theo dõi chúng tôi
                    <li>
                        <Link href="#">Facbook</Link>
                    </li>

                    <li>
                        <Link href="#">Youtube</Link>
                    </li>

                    <li>
                        <Link href="#">Instagram</Link>
                    </li>

                    <li>
                        <Link href="#">Gmail</Link>
                    </li>
                </ul>
            </div>

        </>
    );
}