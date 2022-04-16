import React, {FC, ReactElement} from 'react';

interface IProps {

}

const App: FC<IProps> = (): ReactElement => {
    return (
        <div className={`bg-red-200 h-screen flex justify-center items-center`}>
            <div className={`bg-red-300 rounded-2xl p-8 min-w-max min-h-max flex flex-col items-center`}>
                <h1 className={`text-3xl font-extrabold`}>尝试定制你的主题！</h1>
                <h2 className={`text-lg my-3 text-amber-50`}>我们将会使用Tailwindcss和CSS3变量制作主题切换</h2>
                <div className={"w-full flex justify-evenly "}>
                    <input className={`transition-colors cursor-pointer p-2 rounded bg-red-400  hover:bg-red-500 `}
                           type="button"
                           value="红色主题"/>
                    <input className={`transition-colors cursor-pointer p-2 rounded bg-blue-400  hover:bg-blue-500 `}
                           type="button"
                           value="蓝色主题"/>
                    <input className={`transition-colors cursor-pointer p-2 rounded bg-green-400  hover:bg-green-500 `}
                           type="button"
                           value="绿色主题"/>
                </div>
            </div>
        </div>
    );
}

export default App;
