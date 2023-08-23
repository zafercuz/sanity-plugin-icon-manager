import {Dialog} from '@sanity/ui'
import {useAppStore} from '../store'
import SearchFilters from './SearchFilters'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

interface SearchDialogProps {}

const SearchDialog = (props: SearchDialogProps) => {
  const closeDialogOpen = useAppStore((s) => s.closeDialogOpen)
  return (
    <Dialog id='search-dialog' header='🙂 Iconify' onClose={closeDialogOpen} width={1}>
      <SearchInput />
      <SearchFilters />
      <SearchResults />
    </Dialog>
  )
}

export default SearchDialog
