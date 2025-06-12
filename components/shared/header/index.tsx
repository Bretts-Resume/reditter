import {ShoppingCart, UserIcon} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {APP_NAME} from '@/lib/constants';

function Header() {
    return (
        <header className="w-full bg-black">
            <div className="bg-blue-600 p-2">
                <span className="justify-self-center lg:block text-white">50% off <b>Gameplay Tools Sale</b> - Build Better Games, Faster</span>
            </div>
            <div className="mx-32 my-5 flex-between">
                <div className="flex-start">
                    <Link href='/' className='flex-start'>
                        <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} height={48} width={48} priority={true}/>
                        <span className="hidden lg:block font-bold text-white text-2xl ml-3">
                            {APP_NAME}
                        </span>
                    </Link>
                </div>
                <div className="space-x-2">
                    <Button asChild variant='secondary'>
                        <Link href='/cart'>
                            <ShoppingCart /> Cart
                        </Link>
                    </Button>
                    <Button asChild variant='secondary' className='bg-blue-600 text-white font-bold'>
                        <Link href='/sign-in'>
                            <UserIcon /> Sign In
                        </Link>
                    </Button>

                </div>
            </div>
            <div className="bg-white px-32 py-5 flex-between text-sm">
                <div className="flex-start">
                    Over <b>13,000 top-rated assets</b>
                </div>
                <div className='space-x-4'>
                    Rated by <b>85,000+ Customers</b>
                </div>
                <div className='space-x-4'>
                    Supported by <b>100,000+ Forum Members</b>
                </div>
                <div className='space-x-4'>
                    Every asset <b>moderated by Univerce</b>
                </div>

            </div>
        </header>
    )
}

export default Header
