export const generateRepository = async (json) => {
  const database = json.database.toLowerCase().replace('ors.', '').replace(/_/g, '')
  // eslint-disable-next-line prefer-destructuring
  const project = json.project
  let text = ''
  text += `package th.co.cdg.cdt.${database}.repository\n`
  text += 'import org.springframework.beans.factory.annotation.Autowired\n'
  text += 'import org.springframework.jdbc.core.JdbcTemplate\n'
  text += 'import org.springframework.jdbc.core.RowMapper\n'
  text += 'import org.springframework.stereotype.Repository\n'
  text += 'import th.co.cdg.cdt.common.util.getSqlStatement\n'
  text += `import th.co.cdg.cdt.${database}.config.DatabaseConfig\n`
  text += `import th.co.cdg.cdt.${database}.model.${project}\n`
  text += 'import java.sql.ResultSet\n\n'
  text += '@Repository\n'
  text += `class ${project.substring(0, 1).toLowerCase() + project.substring(1, project.length)}Repository(@Autowired private val jdbcTemplate: JdbcTemplate, @Autowired private val databaseConfig: DatabaseConfig) : RowMapper<${database}> {\n\n`
  text += `    override fun mapRow(rs: ResultSet, rowNum: Int): ${project} {\n`
  text += `        return ${project}().apply {\n`
  await json.field.forEach((row) => {
    const split = row.name.split('_')
    if (split.length > 1) {
      text += `            ${split[0].toLowerCase() + split[1].substring(0, 1) + split[1].substring(1, split[1].length).toLowerCase()} = rs.get${row.type}("${row.name}")\n`
    } else {
      text += `            ${row.name.toLowerCase().replace(/_/g, '')} = rs.get${row.type}("${row.name}")\n`
    }
  })
  text += '    }\n}\n\n'
  return text
}
export const generateValidate = async (json) => {
  const database = json.database.toLowerCase().replace('ors.', '').replace(/_/g, '')
  // eslint-disable-next-line prefer-destructuring
  const project = json.project
  let text = ''
  text += `package th.co.cdg.cdt.${database}.util\n\n`
  text += 'import th.co.cdg.cdt.common.model.DatetimeInfo\n'
  text += `import th.co.cdg.cdt.${database}.model.${project}\n`
  text += 'fun checkDigit(numberString: String): Boolean {\n'
  text += '    val number = numberString.toLong().toString()\n'
  text += '    val digit: Number\n'
  text += '    val last: Number\n'
  text += '    var sum = 0\n'
  text += '    if (number == "0") return true\n'
  text += '    if (number.length == 1) return false\n'
  text += '    digit = number.length\n'
  text += '    for (i in 1 until number.length) {\n'
  text += '        sum += (number.substring(i - 1, i)).toInt() * ((digit + 1) - i)\n    }\n'
  text += '    last = (11 - (sum % 11)) % 10\n'
  text += '    if (number[number.length - 1].toString() != last.toString()) return false\n    return true\n}\n\n'
  text += `fun validateForInsert${project}(${project.substring(0, 1).toLowerCase() + project.substring(1, project.length)}: ${project}): Boolean {\n`
  text += `    ${project.substring(0, 1).toLowerCase() + project.substring(1, project.length)}.apply {\n`
  await json.field.forEach((row) => {
    const split = row.name.split('_')
    if (split.length > 1) {
      text += `        if (${split[0].toLowerCase() + split[1].substring(0, 1) + split[1].substring(1, split[1].length).toLowerCase()} == null) return false\n`
    } else {
      text += `        if (${row.name.toLowerCase().replace(/_/g, '')} == null) return false\n`
    }
  })
  text += '    }\n    return true\n}\n\n'
  text += `fun validateForUpdate${project}(${project.substring(0, 1).toLowerCase() + project.substring(1, project.length)}: ${project}): Boolean {\n`
  text += `    ${project.substring(0, 1).toLowerCase() + project.substring(1, project.length)}.apply {\n`
  text += '    }\n    return true\n}\n\n'
  return text
}
export const generateFileModel = async (json) => {
  const database = json.database.toLowerCase().replace('ors.', '').replace(/_/g, '')
  // eslint-disable-next-line prefer-destructuring
  const project = json.project
  let text = `package th.co.cdg.cdt.${database}.model\n\n`
  text += 'import com.fasterxml.jackson.annotation.JsonProperty\n\n'
  text += `data class ${project} (\n`
  await json.field.forEach((row) => {
    const split = row.name.split('_')
    if (split.length > 1) {
      text += `    @JsonProperty("${row.name}") var ${split[0].toLowerCase() + split[1].substring(0, 1) + split[1].substring(1, split[1].length).toLowerCase()}: ${row.type}? = null,\n`
    } else {
      text += `    @JsonProperty("${row.name}") var ${row.name.toLowerCase().replace(/_/g, '')}: ${row.type}? = null,\n`
    }
  })
  text += ')'
  return text
}
export const generateMapFieldInsert = async (json) => {
  const database = json.database.toLowerCase().replace('ors.', '').replace(/_/g, '')
  // eslint-disable-next-line prefer-destructuring
  const project = json.project
  let text = ''
  text += `package th.co.cdg.cdt.${database}.util\n\n`
  text += 'import th.co.cdg.cdt.common.model.DatetimeInfo\n'
  text += `import th.co.cdg.cdt.${database}.model.${project}\n`
  text += `fun mapInsert${project}(${project.substring(0, 1).toLowerCase() + project.substring(1, project.length)}: ${project}): Map<String, Any> {\n`
  text += '    val item = linkedMapOf<String, Any>()\n'
  text += '    val datetime = DatetimeInfo().getCurrentDatetime()\n'
  text += `    ${project.substring(0, 1).toLowerCase() + project.substring(1, project.length)}.apply {\n`
  await json.field.forEach((row) => {
    const split = row.name.split('_')
    if (split.length > 1) {
      text += `        item["${row.name}"] = ${split[0].toLowerCase() + split[1].substring(0, 1) + split[1].substring(1, split[1].length).toLowerCase()}!!\n`
    } else {
      text += `        item["${row.name}"] = ${row.name.toLowerCase().replace(/_/g, '')}!!\n`
    }
  })
  text += '}'
  return text
}
export const generateMapFieldUpdate = async (json) => {
  // eslint-disable-next-line prefer-destructuring
  const project = json.project
  let text = '\n\n'
  text += `fun mapUpdate${project}(${project.substring(0, 1).toLowerCase() + project.substring(1, project.length)}: ${project}): Map<String, Any> {\n`
  text += '    val item = linkedMapOf<String, Any>()\n'
  text += '    val datetime = DatetimeInfo().getCurrentDatetime()\n'
  text += `    ${project.substring(0, 1).toLowerCase() + project.substring(1, project.length)}.apply {\n`
  await json.field.forEach((row) => {
    const split = row.name.split('_')
    if (split.length > 1) {
      text += `        if (${split[0].toLowerCase() + split[1].substring(0, 1) + split[1].substring(1, split[1].length).toLowerCase()} != null) item["${row.name}"] = ${split[0].toLowerCase() + split[1].substring(0, 1) + split[1].substring(1, split[1].length).toLowerCase()}!!\n`
    } else {
      text += `        if (${row.name.toLowerCase().replace(/_/g, '')} != null) item["${row.name}"] = ${row.name.toLowerCase().replace(/_/g, '')}!!\n`
    }
  })
  text += '}'
  return text
}
export const generateQueryParameter = async (json) => {
  const database = json.database.toLowerCase().replace('ors.', '').replace(/_/g, '')
  // eslint-disable-next-line prefer-destructuring
  const project = json.project
  // eslint-disable-next-line no-template-curly-in-string
  const queryString = '${if (sqlCond.isEmpty()) "" else "_$sqlCond"}'
  let text = `package th.co.cdg.cdt.${database}.util\n\n`
  text += 'import th.co.cdg.cdt.common.exception.BadRequestException\n\n'
  text += 'private const val badFieldName = "Bad field name in query string"\n'
  text += `fun mapQuery${project}Fields(queryParameters: Map<String, String>): Map<String, Any> {\n`
  text += '    return queryParameters\n'
  text += `            .mapKeys { mapKey${project}(it) }\n`
  text += `            .mapValues { mapValue${project}(it) }\n`
  text += '}\n\n'
  text += `fun mapKey${project}(item: Map.Entry<String, String>): String {\n`
  text += '    val sqlCond = item.key.substringAfterLast("_", "")\n\n'
  text += '    return when (item.key.replace("_$sqlCond", "")) {\n'
  await json.field.forEach((row) => {
    const split = row.name.split('_')
    if (split.length > 1) {
      text += `        "${split[0].toLowerCase() + split[1].substring(0, 1) + split[1].substring(1, split[1].length).toLowerCase()}" -> "${row.name}${queryString}"\n`
    } else {
      text += `        "${row.name.toLowerCase().replace(/_/g, '')}" -> "${row.name}${queryString}"\n`
    }
  })
  text += '        else -> throw BadRequestException(badFieldName)\n    }\n}\n'
  text += `\nprivate fun mapValue${project}(item: Map.Entry<String, String>): Any {\n`
  text += '    val sqlCond = item.key.substringAfterLast("_", "")\n'
  text += '    val sqlCondSet = arrayListOf("like", "ne", "gt", "gte", "lt", "lte")\n\n'
  text += '    return when (item.key.replace(if (sqlCondSet.contains(sqlCond)) "_$sqlCond" else "", "")) {\n'
  await json.field.forEach((row) => {
    text += `        "${row.name}" -> item.value${row.type !== 'String' ? `.to${row.type}()` : ''}\n`
  })
  text += '        else -> throw BadRequestException(badFieldName)\n    }\n}\n'
  return text
}

export default {
  generateRepository, generateValidate, generateFileModel, generateMapFieldInsert, generateMapFieldUpdate, generateQueryParameter,
}
