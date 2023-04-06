import CoPresentIcon from '@mui/icons-material/CoPresent';
import CommentIcon from '@mui/icons-material/Comment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Steps = () => {
    return (
        <div className="bg-black w-[100vw] py-16 flex flex-col items-center justify-center">
            <div className='text-white mb-32 max-w-[500px] flex flex-col text-center  px-4'>
                <p className='mb-4 text-slate-800 text-[14px]'>Tobbie<span className='text-slate-200'>|</span>Properties</p>
                <p className='mb-4 text-4xl text-slate-500 font-bold'>Solve Your Problem in a fastest Way possible</p>
                <p className='text-[14px] text-slate-700 font-bold'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
            </div>
            <div className='flex flex-row items-center justify-center '>
                <div className='flex flex-col gap-4 mr-10 max-w-[430px] px-3'>
                    <CoPresentIcon style={{ color: 'white', fontSize: '48px' }} />
                    <p className='text-xl font-bold text-slate-100 '>Fastest Way</p>
                    <p className='text-slate-700 text-[15px]'>S"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[430px] mr-10 px-3'>
                    <CommentIcon style={{ color: 'white', fontSize: '48px' }} />
                    <p className='text-xl font-bold text-slate-100'>24/7</p>
                    <p className='text-slate-700 text-[13px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                </div>
                <div className='flex flex-col gap-4 max-w-[430px] px-3'>
                    <EmojiEmotionsIcon style={{ color: 'white', fontSize: '48px' }} />
                    <p className='text-xl font-bold text-slate-100'>Tips and Guides</p>
                    <p className='text-slate-700 text-[15px]'>S"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                </div>
            </div>
        </div>
    )
}
export default Steps;