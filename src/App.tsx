import React, {FC, ReactElement} from 'react';

interface IProps {

}



const App: FC<IProps> = (): ReactElement => {
    const themes = ['theme-blue','theme-green']
    const changeTheme = (theme:string)=>{
        const body = document.body;
        themes.forEach(e=>{
            body.classList.remove(e)
        })
        body.classList.add(theme)
    }
    return (
        <div className={`transition-all duration-500 bg-skin-base h-screen flex justify-center items-center`}>
            <div className={`transition-all duration-500 bg-skin-card rounded-2xl p-8 min-w-max min-h-max flex flex-col items-center`}>
                <h1 className={`transition-all duration-500 text-amber-50 text-3xl font-extrabold`}>尝试定制你的主题！</h1>
                <h2 className={`transition-all duration-500 text-lg my-3 text-amber-50`}>我们将会使用Tailwindcss和CSS3变量制作主题切换</h2>
                <div className={"transition-all duration-500 w-full flex justify-evenly "}>
                    <input className={`transition-all duration-500 transition-colors cursor-pointer p-2 rounded text-amber-50 opacity-90
                           bg-skin-btn  hover:bg-skin-btn-hover `}
                           type="button"
                           value="红色主题"
                           onClick={()=>changeTheme("")}
                    />
                    <input className={`transition-all duration-500 cursor-pointer p-2 rounded text-amber-50 opacity-90
                           bg-skin-btn  hover:bg-skin-btn-hover `}
                           type="button"
                           value="蓝色主题"
                           onClick={()=>changeTheme(themes[0])}
                    />
                    <input className={`transition-all duration-500 transition-colors cursor-pointer p-2 rounded text-amber-50 opacity-90
                           bg-skin-btn  hover:bg-skin-btn-hover `}
                           type="button"
                           value="绿色主题"
                           onClick={()=>changeTheme(themes[1])}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
