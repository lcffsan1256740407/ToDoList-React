import React , {useState}from 'react'
import './index.less'

export default function Header() {
    const [value,setValue] = useState('')
    // 回车搜索事件
    function CatchData(e){
        if(e.keyCode === 13){
            
        }
    }
    // 获取value值
    function getValue(e){
        setValue(e.target.value)
    }

    return (
        <div>
            <input className='Search' type="text" placeholder='回车后搜索' value={value} onKeyDown={CatchData}  onChange={getValue}/>
        </div>
    )
}
