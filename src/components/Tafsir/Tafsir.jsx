import classNames from 'classnames'
import { useEffect, useState } from 'react'

import tafsirStyle from './tafsirText.module.css'

const TafsirModal = ({isOpen, verseKey, closeModal}) => {

    const [tafsirData, setTafsirData] = useState({})

    useEffect(() => {
        async function getTafsirByVerse(verseKey){
            const response = await fetch(`https://api.qurancdn.com/api/qdc/tafsirs/en-tafisr-ibn-kathir/by_ayah/${verseKey}?locale=en&mushaf=7`)
            const result = await response.json()
            setTafsirData(result)
            console.log(result);
        }
        if (isOpen === true) {
            getTafsirByVerse(verseKey)
        } else {
            setTafsirData({})
        }
        
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
        
    }, [isOpen])
    
    return (
        <div>
            <div className={classNames(
                'h-screen w-screen fixed bg-gray-700/20 top-0 left-0 z-[60] transition-all',
                {"visible opacity-100": isOpen},
                {"invisible opacity-0": !isOpen}
            )}></div>
            
            <div className={classNames(
                'z-[70] h-screen pb-20 fixed w-screen top-0 left-0 overflow-y-scroll flex justify-center pt-28',
                {"visivle": isOpen},
                {"invisible": !isOpen}
            )}>
                <div className={classNames('left-0 top-0 h-screen w-screen', {"fixed": isOpen}, {"hidden": !isOpen})} onClick={closeModal}></div>
                <div className={classNames(
                    'z-[70] h-min min-h-[80%] w-11/12 max-w-6xl bg-gray-100 p-8 xl:p-12 relative rounded-md transform transition-all',
                    {"translate-y-0 opacity-100": isOpen},
                    {"translate-y-52 opacity-0": !isOpen}
                )}>
                    <span onClick={closeModal} className='absolute right-5 cursor-pointer top-5'>X</span>
                    <div className={tafsirStyle.tafsir_text} dangerouslySetInnerHTML={{__html:tafsirData.tafsir?.text}}></div>
                </div>
            </div>
        </div>
  )
}

export default TafsirModal