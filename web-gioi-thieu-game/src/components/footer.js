// import Footer_Style from './css/footer.module.css';
import Logo from '../../public/logonew.png';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYouTube } from '@fortawesome/free-solid-svg-icons';

export default function navBarComponent() {
    return (

        <div className='row footer-container'>


            <div className='col-12 col-sm-4'>
                <Image
                    src={Logo}
                    alt="Logo"
                    style={{ width: 95 + '%' }}
                />

                <p>
                    nguyentiendat.com là website giới thiệu Game Miễn Phí Tốc độ cao mới nhất ,
                    Full Kích Hoạt , Full DLC , Full Mods …
                    chia sẻ những thủ thuật về game và công nghệ .
                    Ngoài ra nguyentiendat.com còn cung cấp cho anh em một nơi
                    tải Phần Mềm Miễn Phí Chất Lượng Cao . Với Phương Châm
                    ” Chia sẻ miễn phí tất cả “
                </p>


            </div>

            <div className='col-12 col-sm-4'>
                <ul>Địa chỉ
                    <li>
                        <Link href="#">Số 3 phố Cầu Giấy, P.Láng Thượng, Q.Đống Đa, Hà Nội.</Link>
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
        </div>

    );
}