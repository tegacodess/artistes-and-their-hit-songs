class Artists extends React.Component {
    constructor() {
        super();
        this.state = {
            artists: ['a', 'b', ],
            currentPage: 1,
            artistsPerPage: 1
        };
        this.handleClick = this.handleClick.bind (this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { artists, currentPage, artistsPerPage }
        }
    }
