import React from 'react'
import './index.less'
export default function Context() {
    //列表任务数组
    let ary = ['吃饭', '睡觉', 'Vue', 'React']
    // 索引
    let ary2 = []
    function getItem(index) {
        return ()=>{
            console.log(index)
            ary2.push(index)
        }
    }
    return (
        <div className='Context'>
            <ul>
                {ary.map((item, index) => {
                    return (<li key={index}>
                        <label>
                            <input type='checkbox' onClick={getItem(index)}/>
                            {item}</label>
                        <button>删除</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}
