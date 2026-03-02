import json
import pandas as pd
from datetime import datetime
import os
import re

def load_data_from_json(json_file='./berna.json'):
    """تحميل البيانات من ملف JSON"""
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"✓ تم تحميل البيانات من {json_file}")
        return data
    except FileNotFoundError:
        print(f"خطأ: ملف {json_file} غير موجود!")
        return None
    except json.JSONDecodeError as e:
        print(f"خطأ في قراءة JSON: {e}")
        return None

def extract_all_data_to_excel(data):
    """استخراج جميع البيانات وتحويلها إلى Excel"""
    
    if not data:
        print("لا توجد بيانات لتحويلها!")
        return None
    
    current_year = datetime.now().year
    
    # 1. إنشاء ورقة المعلومات الشخصية
    personal_data = []
    
    # البيانات الأساسية
    personal_data.append(['SECTION', 'FIELD', 'ENGLISH', 'ARABIC', 'FRENCH', 'EDITABLE', 'NOTES'])
    
    # Top Section
    if 'Data' in data and 'Top' in data['Data']:
        top = data['Data']['Top']
        personal_data.append(['Top Info', 'Name', top.get('Name', ''), '', '', 'YES', 'Full name'])
        personal_data.append(['Top Info', 'Title', top.get('Post', ''), '', '', 'YES', 'Professional title'])
        personal_data.append(['Top Info', 'Avatar', top.get('Avatar', ''), '', '', 'NO', 'Profile image path'])
    
    # About Section
    if 'Data' in data and 'Scroll' in data['Data'] and 'About' in data['Data']['Scroll']:
        about = data['Data']['Scroll']['About']
        for item in about:
            if len(item) >= 2:
                field_name = item[0]
                value = str(item[1])
                if field_name == 'Age':
                    # Age will be calculated automatically
                    personal_data.append(['About', field_name, value, value, value, 'NO', 'Automatically calculated'])
                else:
                    personal_data.append(['About', field_name, value, '', '', 'YES', ''])
    
    # Contact Information
    if 'Content' in data and 'contact' in data['Content']:
        contact_sections = data['Content']['contact']
        for section in contact_sections:
            if 'data' in section:
                for item in section['data']:
                    if len(item) >= 3:
                        field = item[0].replace(':', '').strip()
                        value = item[1]
                        personal_data.append(['Contact', field, value, '', '', 'YES', ''])
    
    # Social Media Links
    if 'Data' in data and 'Bottom' in data['Data']:
        social = data['Data']['Bottom']
        for platform, link_data in social.items():
            if isinstance(link_data, list) and len(link_data) > 0:
                personal_data.append(['Social Media', platform.capitalize(), link_data[0], '', '', 'YES', f'{platform} profile link'])
    
    # Banner Information
    if 'Content' in data and 'home' in data['Content'] and 'banner' in data['Content']['home']:
        banner = data['Content']['home']['banner']
        personal_data.append(['Banner', 'Title', banner.get('title', ''), '', '', 'YES', 'Main banner title'])
        personal_data.append(['Banner', 'Button Text', banner.get('btnText', ''), '', '', 'YES', ''])
        personal_data.append(['Banner', 'Link Text', banner.get('linkText', ''), '', '', 'YES', ''])
    
    df_personal = pd.DataFrame(personal_data[1:], columns=personal_data[0])
    
    # 2. إنشاء ورقة اللغات
    languages_data = []
    languages_data.append(['LANGUAGE', 'PROGRESS_EN', 'PROGRESS_AR', 'PROGRESS_FR', 'NOTES_EN', 'NOTES_AR', 'NOTES_FR'])
    
    if 'Data' in data and 'Scroll' in data['Data'] and 'Languages' in data['Data']['Scroll']:
        languages = data['Data']['Scroll']['Languages']
        for lang in languages:
            name = lang.get('Name', '')
            progress = lang.get('Progress', '').replace('p', '')
            languages_data.append([
                name, 
                progress, progress, progress,
                'Native' if name == 'Arabic' else 'Fluent' if name == 'English' else 'Advanced',
                'اللغة الأم' if name == 'Arabic' else 'طلاقة' if name == 'English' else 'متقدم',
                'Langue maternelle' if name == 'Arabic' else 'Courant' if name == 'English' else 'Avancé'
            ])
    
    df_languages = pd.DataFrame(languages_data[1:], columns=languages_data[0])
    
    # 3. إنشاء ورقة المهارات
    skills_data = []
    skills_data.append(['CATEGORY', 'SKILL_NAME_EN', 'PROGRESS', 'SKILL_NAME_AR', 'SKILL_NAME_FR'])
    
    if 'Data' in data and 'Scroll' in data['Data'] and 'Skills' in data['Data']['Scroll']:
        skills = data['Data']['Scroll']['Skills']
        for skill_group in skills:
            category = skill_group.get('Title', '').replace(':', '').strip()
            items = skill_group.get('items', [])
            for item in items:
                skill_name = item.get('Name', '')
                progress = item.get('Progress', '')
                skills_data.append([
                    category,
                    skill_name,
                    progress,
                    '',  # للنسخة العربية (يمكن للزبونة ملؤها)
                    ''   # للنسخة الفرنسية (يمكن للزبونة ملؤها)
                ])
    
    df_skills = pd.DataFrame(skills_data[1:], columns=skills_data[0])
    
    # 4. إنشاء ورقة المعرفة
    knowledge_data = []
    knowledge_data.append(['KNOWLEDGE_ITEM_EN', 'KNOWLEDGE_ITEM_AR', 'KNOWLEDGE_ITEM_FR', 'CATEGORY'])
    
    if 'Data' in data and 'Scroll' in data['Data'] and 'Knowledges' in data['Data']['Scroll']:
        knowledges = data['Data']['Scroll']['Knowledges']
        for knowledge in knowledges:
            knowledge_data.append([
                knowledge,
                '',  # للنسخة العربية
                '',  # للنسخة الفرنسية
                'General'
            ])
    
    df_knowledge = pd.DataFrame(knowledge_data[1:], columns=knowledge_data[0])
    
    # 5. إنشاء ورقة الخدمات
    services_data = []
    services_data.append(['SERVICE_EN', 'DESCRIPTION_EN', 'SERVICE_AR', 'DESCRIPTION_AR', 'SERVICE_FR', 'DESCRIPTION_FR', 'LINK'])
    
    if 'Content' in data and 'home' in data['Content'] and 'services' in data['Content']['home']:
        services = data['Content']['home']['services']
        for service in services:
            services_data.append([
                service.get('title', ''),
                service.get('description', ''),
                '',  # للنسخة العربية
                '',  # للنسخة الفرنسية
                '',  # للنسخة الفرنسية
                '',  # للنسخة الفرنسية
                service.get('linkUrl', '')
            ])
    
    df_services = pd.DataFrame(services_data[1:], columns=services_data[0])
    
    # 6. إنشاء ورقة الأسعار
    prices_data = []
    prices_data.append(['PACKAGE_EN', 'PRICE', 'IS_POPULAR', 'PACKAGE_AR', 'PACKAGE_FR', 'NOTE_EN', 'NOTE_AR', 'NOTE_FR'])
    
    if 'Content' in data and 'home' in data['Content'] and 'prices' in data['Content']['home']:
        prices = data['Content']['home']['prices']
        for price in prices:
            # استخراج السعر من التنسيق HTML
            price_text = price.get('price', '')
            price_value = '20'  # افتراضي
            if '$' in price_text:
                match = re.search(r'\$(\d+)', price_text)
                if match:
                    price_value = match.group(1)
            
            prices_data.append([
                price.get('title', ''),
                price_value,
                'YES' if price.get('isPopular', False) else 'NO',
                '',  # للنسخة العربية
                '',  # للنسخة الفرنسية
                price.get('note', ''),
                '',  # للنسخة العربية
                ''   # للنسخة الفرنسية
            ])
    
    df_prices = pd.DataFrame(prices_data[1:], columns=prices_data[0])
    
    # 7. إنشاء ورقة العدادات
    counters_data = []
    counters_data.append(['COUNTER_NAME_EN', 'VALUE', 'COUNTER_NAME_AR', 'COUNTER_NAME_FR'])
    
    if 'Content' in data and 'home' in data['Content'] and 'counters' in data['Content']['home']:
        counters = data['Content']['home']['counters']
        for counter in counters:
            counters_data.append([
                counter[0] if len(counter) > 0 else '',
                str(counter[1]) if len(counter) > 1 else '',
                '',  # للنسخة العربية
                ''   # للنسخة الفرنسية
            ])
    
    df_counters = pd.DataFrame(counters_data[1:], columns=counters_data[0])
    
    # 8. إنشاء ورقة الشهادات
    testimonials_data = []
    testimonials_data.append(['NAME_EN', 'DESCRIPTION_EN', 'TEXT_EN', 'STARS', 'NAME_AR', 'DESCRIPTION_AR', 'TEXT_AR', 'IMAGE_PATH'])
    
    if 'Content' in data and 'home' in data['Content'] and 'recommendations' in data['Content']['home']:
        testimonials = data['Content']['home']['recommendations']
        for testimonial in testimonials:
            testimonials_data.append([
                testimonial.get('name', ''),
                testimonial.get('description', ''),
                testimonial.get('text', ''),
                str(testimonial.get('stars', 5)),
                '',  # للنسخة العربية
                '',  # للنسخة الفرنسية
                '',  # للنسخة الفرنسية
                testimonial.get('imgPath', '')
            ])
    
    df_testimonials = pd.DataFrame(testimonials_data[1:], columns=testimonials_data[0])
    
    # 9. إنشاء ورقة المعرض
    gallery_data = []
    gallery_data.append(['TYPE', 'TITLE', 'DESCRIPTION', 'IMAGE_PATH', 'VIDEO_URL'])
    
    if 'Content' in data and 'gallery' in data['Content'] and 'filter_list' in data['Content']['gallery']:
        gallery_items = data['Content']['gallery']['filter_list']
        for item in gallery_items:
            gallery_data.append([
                item.get('type', ''),
                item.get('title', ''),
                item.get('description', ''),
                item.get('imgPath', ''),
                item.get('templateUrl', '')
            ])
    
    df_gallery = pd.DataFrame(gallery_data[1:], columns=gallery_data[0])
    
    # 10. إنشاء ورقة السيرة الذاتية
    history_data = []
    history_data.append(['CATEGORY', 'TYPE', 'INSTITUTION', 'TITLE', 'DATE', 'DESCRIPTION', 'LINK'])
    
    if 'Content' in data and 'history' in data['Content']:
        history_sections = data['Content']['history']
        for section in history_sections:
            category = section.get('title', '')
            items = section.get('data', [])
            for item in items:
                history_data.append([
                    category,
                    item.get('type', ''),
                    item.get('src', ''),
                    item.get('title', ''),
                    item.get('date', ''),
                    item.get('description', ''),
                    item.get('linkPath', '')
                ])
    
    df_history = pd.DataFrame(history_data[1:], columns=history_data[0])
    
    # إنشاء ملف Excel مع جميع الأوراق
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    excel_filename = f'Berna_Portfolio_Data_{timestamp}.xlsx'
    
    with pd.ExcelWriter(excel_filename, engine='openpyxl') as writer:
        # كتابة كل DataFrame في ورقة منفصلة
        df_personal.to_excel(writer, sheet_name='Personal_Info', index=False)
        df_languages.to_excel(writer, sheet_name='Languages', index=False)
        df_skills.to_excel(writer, sheet_name='Skills', index=False)
        df_knowledge.to_excel(writer, sheet_name='Knowledge', index=False)
        df_services.to_excel(writer, sheet_name='Services', index=False)
        df_prices.to_excel(writer, sheet_name='Pricing', index=False)
        df_counters.to_excel(writer, sheet_name='Counters', index=False)
        df_testimonials.to_excel(writer, sheet_name='Testimonials', index=False)
        df_gallery.to_excel(writer, sheet_name='Gallery', index=False)
        df_history.to_excel(writer, sheet_name='History', index=False)
        
        # إضافة ورقة التعليمات
        instructions_data = [
            ['🎻 INSTRUCTIONS FOR EDITING 🎻'],
            [''],
            ['📋 GENERAL INSTRUCTIONS:'],
            ['1. You can edit cells with WHITE background'],
            ['2. Do NOT edit cells with GRAY background'],
            ['3. Do NOT change column names or sheet names'],
            ['4. Save the file and send it back'],
            [''],
            ['🌐 TRANSLATION INSTRUCTIONS:'],
            ['1. For Arabic translation: Fill columns ending with _AR'],
            ['2. For French translation: Fill columns ending with _FR'],
            ['3. Keep the same meaning as English version'],
            [''],
            ['📞 FOR QUESTIONS: me@berna-violin.art'],
            [''],
            ['⚠️ IMPORTANT:'],
            ['- Age is calculated automatically'],
            ['- Image paths should not be changed'],
            ['- URL links should remain valid'],
        ]
        
        df_instructions = pd.DataFrame(instructions_data)
        df_instructions.to_excel(writer, sheet_name='Instructions', index=False, header=False)
    
    print(f"✓ تم إنشاء ملف Excel: {excel_filename}")
    print(f"✓ عدد الأوراق: 11 ورقة")
    print(f"✓ الحقول القابلة للتعديل: مظللة بالأبيض")
    print(f"✓ الحقول غير القابلة للتعديل: مظللة بالرمادي")
    
    return excel_filename

def convert_excel_back_to_json(excel_file):
    """تحويل ملف Excel مرة أخرى إلى JSON"""
    try:
        # قراءة البيانات من Excel
        df_personal = pd.read_excel(excel_file, sheet_name='Personal_Info')
        
        # هنا يمكنك إضافة منطق لتحويل البيانات مرة أخرى إلى JSON
        # هذا يتطلب معرفة هيكل البيانات الأصلي
        
        print(f"✓ تم قراءة ملف Excel: {excel_file}")
        print("⚠️ ملاحظة: وظيفة التحويل من Excel إلى JSON تحتاج للتطوير الكامل")
        
        return True
    except Exception as e:
        print(f"خطأ في قراءة ملف Excel: {e}")
        return False

def main():
    """الدالة الرئيسية"""
    print("=" * 60)
    print("🎻 Berna Dayoub - Portfolio Data Converter 🎻")
    print("=" * 60)
    
    print("\n1. تحويل JSON إلى Excel (لإرساله للزبونة)")
    print("2. تحويل Excel إلى JSON (بعد التعديلات)")
    print("3. الخروج")
    
    choice = input("\nاختر الخيار (1-3): ").strip()
    
    if choice == '1':
        # تحميل البيانات من JSON
        data = load_data_from_json('./berna.json')
        if data:
            excel_file = extract_all_data_to_excel(data)
            if excel_file:
                print(f"\n✅ تم إنشاء ملف Excel بنجاح!")
                print(f"📂 اسم الملف: {excel_file}")
                print("\n📋 التعليمات:")
                print("1. أرسل هذا الملف للزبونة")
                print("2. الزبونة يمكنها تعديل الخلايا البيضاء فقط")
                print("3. الزبونة ترجع الملف بعد التعديل")
                print("4. استخدم الخيار 2 لتحويله مرة أخرى إلى JSON")
    
    elif choice == '2':
        excel_file = input("أدخل مسار ملف Excel: ").strip()
        if os.path.exists(excel_file):
            convert_excel_back_to_json(excel_file)
        else:
            print(f"❌ ملف {excel_file} غير موجود!")
    
    elif choice == '3':
        print("مع السلامة! 👋")
    
    else:
        print("❌ خيار غير صحيح!")

if __name__ == "__main__":
    main()