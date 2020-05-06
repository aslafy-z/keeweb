import { Model } from 'framework/model';
import { EntrySearch } from 'util/entry-search';

class ExternalEntryModel extends Model {
    tags = [];
    fields = {};

    constructor(props) {
        super(props);
        this._buildSearchText();
        this._buildFields();
        this._search = new EntrySearch(this);
    }

    matches(filter) {
        return this._search.matches(filter);
    }

    _buildSearchText() {
        let text = '';
        if (this.title) {
            text += this.title.toLowerCase();
        }
        if (this.user) {
            text += '\n' + this.user.toLowerCase();
        }
        this.searchText = text;
    }

    _buildFields() {
        this.fields.Title = this.title;
    }

    getAllFields() {
        return this.fields;
    }
}

ExternalEntryModel.defineModelProperties({
    id: '',
    external: true,
    readOnly: true,
    device: undefined,
    deviceSubId: null,
    title: undefined,
    description: undefined,
    fields: undefined,
    icon: undefined,
    tags: undefined,
    searchText: undefined,
    _search: undefined
});

export { ExternalEntryModel };
