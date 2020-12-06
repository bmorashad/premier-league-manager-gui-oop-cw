import {IMatch} from 'src/app/dto/Match'

type state = "open" | "close"
export type values = [state: state, match ?: IMatch[], clubName ?: string]
