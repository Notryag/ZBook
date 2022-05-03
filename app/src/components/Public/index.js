import useMount from '@/hooks/useMount'
import { useDispatch} from 'react-redux';
import { getTagsList, getCategoryList } from '@/redux/article/action';
function PublicCompponent(props) {
    const dispatch = useDispatch()
    useMount(() => {
        dispatch(getTagsList())
        dispatch(getCategoryList())
    })

    return (
        <>
            <div></div>
        </>
    )
}
export default PublicCompponent