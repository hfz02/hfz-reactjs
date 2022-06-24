import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Kontak = () => {
    return ( 
        <div>
            <div id="kontak" className="row-4">
                <h2>Kontak Saya</h2>
                <form>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label email">Email</label>
                    <input type="email" className="form-control emailIn" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label pesan">Pesan</label>
                    <textarea className="form-control pesanIn" id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary mb-3">Kirim</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Kontak;