import {ControlsIcon, FilterIcon, SearchIcon} from '@sanity/icons'
import {Box, Button, Flex, TextInput} from '@sanity/ui'
import useSearchBag from '../hooks/useSearchBag'
import {useAppStore} from '../store'

interface SearchInputProps {}

const SearchInput = (props: SearchInputProps) => {
  const searchTerm = useAppStore((s) => s.searchTerm)
  const isFiltersOpen = useAppStore((s) => s.isFiltersOpen)
  const hasFiltersApplied = useAppStore((s) => s.hasFiltersApplied)
  const toggleFilters = useAppStore((s) => s.toggleFilters)
  const {onChangeSearchTerm, searchIcons} = useSearchBag()
  return (
    <Flex padding={4} gap={2} justify='space-between' align='center'>
      <Box style={{width: '100%'}}>
        <TextInput placeholder='Search icons...' padding={4} onChange={onChangeSearchTerm} />
      </Box>
      <Button
        icon={hasFiltersApplied() ? FilterIcon : ControlsIcon}
        mode={isFiltersOpen || hasFiltersApplied() ? 'default' : 'bleed'}
        tone='primary'
        style={{cursor: 'pointer'}}
        onClick={toggleFilters}
      />
      <Button
        iconRight={SearchIcon}
        text='Search'
        tone='primary'
        style={{cursor: 'pointer'}}
        onClick={searchIcons}
        disabled={!searchTerm}
      />
    </Flex>
  )
}

export default SearchInput
