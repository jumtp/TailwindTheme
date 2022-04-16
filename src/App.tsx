import React, {FC, ReactElement, ReactEventHandler} from 'react';

interface IProps {

}

const App: FC<IProps> = (): ReactElement => {

    //按钮组件
    const Btn: FC<{ value: string, onClick?: ReactEventHandler }> = ({value,onClick}) => {
        return <input className={`transition-colors cursor-pointer p-2 rounded bg-red-400  hover:bg-red-500 `}
                      type="button"
                      value={value} onClick={onClick}/>
    }

    return (
        //背景颜色
        <div className={`transition-all bg-red-200 h-screen flex justify-center items-center`}>
            {/* 卡片颜色 */}
            <div className={`transition-all bg-red-300 rounded-2xl p-8 min-w-max min-h-max flex flex-col items-center`}>
                <h1 className={`transition-all text-3xl font-extrabold`}>尝试定制你的主题！</h1>
                <h2 className={`transition-all text-lg my-3 text-amber-50`}>我们将会使用Tailwindcss和CSS3变量制作主题切换</h2>
                <div className={"transition-all w-full flex justify-evenly "}>
                    <Btn value={"红色主题"} onClick={()=>{console.log('1')}}/>
                    <Btn value={"蓝色主题"} onClick={()=>{console.log('2')}}/>
                    <Btn value={"绿色主题"} onClick={()=>{console.log('3')}}/>
                </div>
            </div>
        </div>
    );
}

export default App;
