import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>

            <table>
                <tbody>
                    <tr>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <td>
                                <div>Advance Collection</div>
                                <Link to="/advance-collection">Advance Collection</Link>
                            </td>
                            <td>
                                <div>Extra Bed</div>
                                <Link to="/extra-bed">Extra Bed</Link>
                            </td>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <td>
                                <div>Bed Change</div>
                                <Link to="/bed-change">Bed Change</Link>
                            </td>
                            <td>
                                <div>Procedure Entry</div>
                                <Link to="/procedure-entry">Procedure Entry</Link>
                            </td>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <td>
                                <div>Doctor Visit Entry</div>
                                <Link to="/doctor-visit-entry">Doctor Visit Entry</Link>
                            </td>
                            <td>
                                <div>Bill Modify</div>
                                <Link to="/bill-modify">Bill Modify</Link>
                            </td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;