const Table = () => {
    const data = 'encrypted';
    return (
        <>
        <fieldset>
            <form>
                <label>{data}</label> <br />
                <input type="text" placeholder="First Name" />  <br />
                <input type="text" placeholder="Last Name" /> <br />
                <input type="text" placeholder="Address" /> <br />
                <input type="submit" />
            </form>
        </fieldset>
        </>
    );
};

export default Table;