import * as React from 'react'
import * as style from './style.scss'

const Text: React.FunctionComponent = ({ children }) => <div className={style.text}>{children}</div>

export default Text
