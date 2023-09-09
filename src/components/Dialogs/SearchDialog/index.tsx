import {Dialog, Flex} from '@sanity/ui'
import {useAppStoreContext} from '../../../store/context'
import SearchFilters from '../../Search/SearchFilters'
import SearchInput from '../../Search/SearchInput'
import SearchResults from '../../Search/SearchResults'
import IconifySmile from '../../icons/IconifySmile'

interface SearchDialogProps {}

const DialogHeader = () => (
  <Flex align='center' gap={2}>
    <IconifySmile /> Find your icon
  </Flex>
)

const SearchDialog = (props: SearchDialogProps) => {
  const isSearchDialogOpen = useAppStoreContext((s) => s.isSearchDialogOpen)
  const closeSearchDialog = useAppStoreContext((s) => s.closeSearchDialog)

  if (!isSearchDialogOpen) return null

  return (
    <Dialog id='search-dialog' header={<DialogHeader />} onClose={closeSearchDialog} width={2}>
      <SearchInput />
      <SearchFilters />
      <SearchResults />
    </Dialog>
  )
}

export default SearchDialog
