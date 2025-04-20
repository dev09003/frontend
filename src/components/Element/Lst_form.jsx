import React from 'react'
import './Lst_form.css'

function Lst_form() {
  return (
    <div className='main line' id='list'>
        <fieldset>
            <legend><h2>List your space</h2></legend>
            <form className='lst-form'>
                <div className="input-fld-design">
                    <label for="text">Location : </label>
                    <input type='text' name='location' className='design'></input>
                </div>

                {/* New Contact Number field */}
                <div className="input-fld-design">
                    <label for="contact">Contact Number : </label>
                    <input 
                        type='tel' 
                        name='contact' 
                        className='design' 
                        pattern="[0-9]{10}"
                        placeholder="Enter 10-digit number"
                        required
                    ></input>
                </div>

                {/* New Price field */}
                <div className="input-fld-design">
                    <label for="price">Price (per hour) : </label>
                    <div className="price-input">
                        <span className="currency">₹</span>
                        <input 
                            type='number' 
                            name='price' 
                            className='design' 
                            min="1"
                            placeholder="Enter amount"
                            required
                        ></input>
                    </div>
                </div>

                <div className="input-fld-design">
                    <label for="image">Upload images (Parking space) : </label>
                    <input 
                        type='file' 
                        name='images' 
                        className='design' 
                        accept="image/*" 
                        multiple
                        onChange={(e) => {
                            const files = Array.from(e.target.files);
                            // You can handle the multiple files here
                            console.log('Selected files:', files);
                        }}
                    ></input>
                    <small>You can select multiple images by holding Ctrl/Cmd while selecting</small>
                </div>
                <div className="input-fld-design">
                        <label for="type">Select your area type:</label>
                    <div >
                        <input type="radio" id="residential" name="space_type" value="residential" className='flex' required />
                        <label for="residential">Residential</label>
                    </div>
                    <div >
                        <input type="radio" id="commercial" name="space_type" className='flex' value="commercial" />
                        <label for="commercial">Commercial</label>
                    </div>
                </div>
                <div className="input-fld-design">
                        <label for="type">Select your space size:</label>
                    <div >
                        <input type="radio"  name="space_type" value="small" className='flex' required />
                        <label for="residential">Small (1 vehicle)</label>
                    </div>
                    <div >
                        <input type="radio"  name="space_type" className='flex' value="medium" />
                        <label for="commercial">Medium (2-3 vehicle)</label>
                    </div>
                    <div >
                        <input type="radio"  name="space_type" className='flex' value="medium" />
                        <label for="commercial">Large (4-6 vehicle)</label>
                    </div>
                </div>
                <div className="input-fld-design">
                    <div >
                        <label for="tier">Security Tier:</label>
                        <select id="tier" name="tier" className='flex design' required>
                            <option value="tier1" >Tier 1</option>
                            <option value="tier2" >Tier 2</option>
                            <option value="tier3" >Tier 3</option>
                        </select>
                    </div>
                </div>
                <label id="remember"><input type='checkbox'></input>Agree for Terms & conditions</label><br/>
                <button>Create Now</button>
            </form>
        </fieldset>
    </div>
        
  )
}

export default Lst_form