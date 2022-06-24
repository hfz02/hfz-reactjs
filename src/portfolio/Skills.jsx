import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Icon } from '@iconify/react';

const Skills = () => {
    return ( 
        <div>
            <div id="skills" className="row-2">
                <h2>Bahasa yang Saya Gunakan</h2>
                <div className="skills">
                    <div className="skill-1">
                        <div className="gambar-1"><Icon weight="100px" height="100px" icon="vscode-icons:file-type-html" /></div>
                        <div className="nama">HTML</div>
                    </div>
                    <div className="skill-2">
                        <div className="gambar-2"><Icon weight="100px" height="100px" className="iconify" icon="vscode-icons:file-type-css" /></div>
                        <div className="nama">CSS</div>
                    </div>
                    <div className="skill-3">
                        <div className="gambar-3"><Icon weight="100px" height="100px" className="iconify" icon="logos:javascript" /></div>
                        <div className="nama">Javascript</div>
                    </div>
                    <div className="skill-4">
                        <div className="gambar-4"><Icon weight="100px" height="100px" className="iconify" icon="logos:figma" /></div>
                        <div className="nama">Figma</div>
                    </div>
                </div>

                <div className="skills">
                    <div className="skill-5">
                        <div className="gambar-5"><Icon weight="100px" height="100px" className="iconify" icon="vscode-icons:file-type-reactjs" /></div>
                        <div className="nama">React JS</div>
                    </div>
                    <div className="skill-6">
                        <div className="gambar-6"><Icon weight="100px" height="100px" className="iconify" icon="logos:nodejs-icon" /></div>
                        <div className="nama">Node Express JS</div>
                    </div>
                    <div className="skill-7">
                        <div className="gambar-7"><Icon weight="100px" height="100px" className="iconify" icon="vscode-icons:folder-type-mongodb-opened" /></div>
                        <div className="nama">Mongo DB</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;

// backgroundSize="cover"