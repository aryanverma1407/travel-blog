import './write.css';
import writeimage from './munnar.jpg'
export default function Write() {
  return (
    <div className='write'>
              <img className="writeImg" src={writeimage} alt="" />
            

        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class=" writeIcon fa-solid fa-plus"></i>
                </label>
              <input type="file"  id="fileInput" style={{display:"none"}} /> 
              <input type="text" placeholder='Title'  className='writeInput' autoFocus={true}/>  
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
      
    </div>
  );
}
