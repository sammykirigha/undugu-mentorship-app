import Image from "next/image";
import logo from "./../../public/logo-two.jpg";


function Logo(props: any) {
    const { renderDefault } = props;

    return (
        <div className="!flex !items-center space-x-2">
            <Image alt="logo" src={logo} width={70} height={70} className="!rounded-full !object-cover" />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    )
}

export default Logo;